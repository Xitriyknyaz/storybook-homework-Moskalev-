import React from "react";
import Banner from "./Banner";
export default { title: "Пример/Баннер", component: Banner };
export const Info = () => (
  <Banner variant="info">
    {" "}
         {" "}
    <p>
      {" "}
              Пример инфо баннера. {" "}
    </p>{" "}
       {" "}
  </Banner>
);
export const Danger = () => (
  <Banner variant="danger">
    {" "}
          <p>Пример баннера с оповещением об ошибке.</p>   {" "}
  </Banner>
);
export const Congrats = () => (
  <Banner variant="congrats">
    {" "}
          <p> Баннер победителя</p>    {" "}
  </Banner>
);
export const Documentation = () => (
  <Banner variant="documentation">
    {" "}
         {" "}
    <p>
      {" "}
      Баннер для списка документации.{" "}
    </p>{" "}
       {" "}
  </Banner>
);