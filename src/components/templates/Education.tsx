import React from "react"
import { styled } from "@theme/stitches.config"

interface Supervisor {
  name: string
  link: string
}

// const EducationMetadata = styled("div", {
//   display: "flex",
//   color: "$polarBlue",
// })

// interface EducationItemProps {
//   title: string
//   location: string
//   date: string
//   supervisors?: string[]
// }

// const EducationItem = ({
//   title,
//   location,
//   date,
//   supervisors,
// }: EducationItemProps) => {
//   return (
//     <div>
//       <Heading as="h3" size="3">
//         {title}
//       </Heading>
//       <EducationMetadata>
//         <Text>{location}</Text>
//         <Text>/</Text>
//         <Text>{date}</Text>
//         {supervisors && (
//           <>
//             <Text>/</Text>
//             <Text>
//               Supervised by {supervisors[0]} & {supervisors[1]}
//             </Text>
//           </>
//         )}
//       </EducationMetadata>
//     </div>
//   )
// }

// ;<section>
//   <Heading as="h2" size="2">
//     Education.
//   </Heading>
//   <EducationItem
//     title="PhD Computer Science"
//     location="Heriot-Watt University"
//     date="Since 2020"
//     supervisors={["Ioannis Konstas", "Arash Eshghi"]}
//   ></EducationItem>
//   <EducationItem
//     title="MSc (Dist.) Artificial Intelligence with Speech and Multimodal Interaction"
//     location="Heriot-Watt University"
//     date="2019-20"
//     supervisors={["Ioannis Konstas"]}
//   ></EducationItem>
//   <EducationItem
//     title="BSc Mathematical, Statistical, and Actuarial Science"
//     location="Heriot-Watt University"
//     date="2015-19"
//   ></EducationItem>
// </section>
interface EducationItemViewProps {
  title: string
  location: string
  date: string
  supervisors?: Supervisor[]
}

const SupervisorLink = styled("a", {
  textDecoration: "underline",
})

const stringifySupervisors = (supervisors: Supervisor[]): React.ReactNode => {
  switch (supervisors.length) {
    case 1:
      return (
        <SupervisorLink href={supervisors[0].link}>
          {supervisors[0].name}
        </SupervisorLink>
      )
    case 2:
    default:
      break
  }
}

const EducationItemView = ({
  title,
  location,
  date,
  supervisors,
}: EducationItemViewProps) => {}
