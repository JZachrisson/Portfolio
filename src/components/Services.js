import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Skills" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, tools } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              {tools.map(tool => {
                return <p style={{ margin: "0" }}>{tool}</p>
              })}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
