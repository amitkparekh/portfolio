const PROJECT_ROOT = `./`

const plopTemplates = `${PROJECT_ROOT}/plop-templates`

const projectSrc = `${PROJECT_ROOT}/src`

/**
 *
 * @param {string} basePath
 */
const addInjectableIndexAction = basePath => {
  return {
    type: "add",
    path: `${basePath}/index.ts`,
    templateFile: `${plopTemplates}/injectableIndex.hbs`,
    skipIfExists: true,
  }
}

/**
 *
 * @param {string} basePath
 * @param {string} name
 * @param {string} casing
 */
const addImportAction = (basePath, name, casing) => {
  return {
    type: "append",
    path: `${basePath}/index.ts`,
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import {{${casing} ${name}}} from "./{{${casing} ${name}}}"`,
  }
}

/**
 *
 * @param {string} basePath
 * @param {string} name
 * @param {string} casing
 */
const addExportAction = (basePath, name, casing) => {
  return {
    type: "append",
    path: `${basePath}/index.ts`,
    pattern: `/* PLOP_INJECT_EXPORT */`,
    template: `\t{{${casing} ${name}}},`,
  }
}

const generateComponent = {
  description: "Create a reusable component",
  prompts: [
    { type: "input", name: "name", message: "What is the component name?" },
    {
      type: "confirm",
      name: "wantView",
      message: "Include view component?",
    },
    {
      type: "confirm",
      name: "wantContainer",
      message: "Include container?",
    },
  ],
  actions(data) {
    const actions = []

    // Guard clause
    if (!data.wantView && !data.wantContainer) {
      return actions
    }

    const componentPath = `${projectSrc}/components`

    if (data.wantView) {
      actions.push({
        type: "add",
        path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.view.tsx`,
        templateFile: `${plopTemplates}/component/component.view.hbs`,
      })
    }

    if (data.wantContainer) {
      actions.push({
        type: "add",
        path: `${componentPath}/{{pascalCase name}}/{{pascalCase name}}.container.tsx`,
        templateFile: `${plopTemplates}/component/component.container.hbs`,
        data: {
          isLinkedWithView: data.wantView && data.wantContainer,
        },
      })
    }

    actions.push({
      type: "add",
      path: `${componentPath}/{{pascalCase name}}/index.ts`,
      templateFile: `${plopTemplates}/component/index.hbs`,
      data: {
        wantContainer: data.wantContainer,
      },
    })

    // Create `Components/index.ts` (if it doesn't exist)
    actions.push(addInjectableIndexAction(componentPath, "name", "pascalCase"))

    // Add modules to `Components/index.ts`
    actions.push(addImportAction(componentPath, "name", "pascalCase"))
    actions.push(addExportAction(componentPath, "name", "pascalCase"))

    return actions
  },
}

module.exports = plop => {
  plop.setGenerator("component", generateComponent)
}
