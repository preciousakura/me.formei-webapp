import { Container, Content, TopContent } from "./styles";
import { ProgressCourse, UserInfo, TodayClasses } from "../../components/layout";
import { ButtonCard } from "../../components/layout/ButtonCard";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export function Home() {
  const options = [
    {
      name: "Horas complementares",
      icon: MaterialCommunityIcons,
      nameIcon: "timelapse",
      linkTo: "AdditionalHours"
    },
    {
      name: "Professores",
      icon: Feather,
      nameIcon: "book",
      linkTo: "Teacher"
    },
    {
      name: "Períodos",
      icon: Feather,
      nameIcon: "calendar",
      linkTo: "Periods"
    },
  ];

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TopContent>
        <UserInfo />
      </TopContent>
      <Content>
        <ProgressCourse />
        {options.map((o) => {
          return <ButtonCard key={o.name} {...o} />;
        })}
        <TodayClasses />
      </Content>
    </Container>
  );
}
