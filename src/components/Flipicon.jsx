import { useState } from "react";

export const Flipicon = (props) => {
  const { icono1, icono2 } = props;
  const [claseIcono, setClaseIcono] = useState(icono1);
  const cambiarIcono = () => {
    setClaseIcono(claseIcono === icono1 ? icono2 : icono1);
  };
  return <i className={claseIcono} onClick={cambiarIcono}></i>;
};
