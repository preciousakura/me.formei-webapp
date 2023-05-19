import { useTheme } from "styled-components";
import { H5 } from "../../shared/text";
import { Container } from "./styles";
import { ClassesCard } from "../ClassesCard";
import { useEffect, useState } from "react";

export function TodayClasses() {
  const theme = useTheme();

  const week = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const today_date = new Date();
  const today_label = `${today_date.getDate()}/${(
    "0000" +
    (today_date.getMonth() + 1)
  ).slice(-2)}`;
  const today_day = week[today_date.getDay()];

  const [data, setData] = useState([
    {
      discipline_name: "Engenharia de Software",
      teacher_name: "Rossana Andrade",
      hour: { start: 8, end: 10 },
      isCurrent: false,
    },
    {
      discipline_name: "Aprendizagem de Máquina",
      teacher_name: "César Lincoln",
      hour: { start: 14, end: 16 },
      isCurrent: false,
    },
    {
      discipline_name: "Computação Gráfica II",
      teacher_name: "Creto Vidal",
      hour: { start: 16, end: 18 },
      isCurrent: false,
    },
  ]);

  useEffect(() => {
    const verify_hour = () => {
      const current_time = new Date();
      const current_hour = current_time.getHours();
      const hourData = data.map((d) => {
        return {
          ...d,
          isCurrent:
            current_hour >= d.hour.start && current_hour <= d.hour.end - 1,
        };
      });
      setData(hourData);
    };

    const interval = setInterval(verify_hour, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <H5>
        Aulas de Hoje ({today_label}):{" "}
        <H5 color={theme.color.primaryColor}>{today_day}</H5>
      </H5>
      {data.map((d) => {
        return <ClassesCard key={d.discipline_name} {...d} />;
      })}
    </Container>
  );
}