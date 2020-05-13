import  React  from 'react';
import faker from 'faker';
export const SectionComponent = () => {

    return (
        <section className="main">
        <article>
          <h2 className="titulo">{ faker.name.title() }</h2>
          <p>{ faker.lorem.paragraphs() }</p>
        </article>
        <article>
          <h2 className="titulo">{ faker.name.title() }</h2>
          <p>{ faker.lorem.paragraphs() }</p>
        </article>
      </section>
    )
}