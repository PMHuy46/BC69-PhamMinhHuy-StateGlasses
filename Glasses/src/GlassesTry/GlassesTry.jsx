import React, { useState } from "react";
import style from "./Style.module.css";
import data from "./dataGlasses.json";

const GlassesTry = () => {
  const [glass, setGlass] = useState({});

  const hanhdleChange = (item) =>{
    setGlass(item)
  }

  return (
    <div className={style.title}>
      <h2 className={style.header}>TRY GLASSES APP ONLINE</h2>
      <div className="d-flex justify-content-evenly my-5">
        <div className={style.try}>
          <img src={glass.url} alt="" />
          <div className={style.info}>
            <p
              style={{
                fontSize: 20,
                fontWeight: "bolder",
                margin: 0,
                color: "blue",
              }}
            >
              {glass.name}
            </p>
            <p style={{ fontWeight: "bolder", margin: 0, color: "white" }}>
              {glass.desc}
            </p>
          </div>
        </div>
        <div className={style.try}></div>
      </div>
      <div className={style.product}>
        {data.map((item) => {
          return (
            <button className="btn" key={item.id} onClick={()=>hanhdleChange(item)}>
              <img src={item.url} alt="..." />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GlassesTry;
