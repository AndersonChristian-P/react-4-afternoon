import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom"

import History from "../History/History"
import Contact from "../Contact/Contact"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>

          <Link to="/about/history" className="subnav_links" >
            <h3>History</h3>
          </Link>

          <Link to="/about/contact" className="subnav_links" >
            <h3>Contact</h3>
          </Link>

        </div>
        <div className='box'>
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route path="/about" component={() => (
              <div>
                <h1>About the University</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae quos corrupti provident asperiores. Labore itaque veniam dolores tenetur ab architecto minima est iusto fuga exercitationem earum, quo aliquid cumque?
                Deserunt ducimus exercitationem officiis. Libero perferendis aperiam optio minus molestias at iste repellat quod laboriosam laudantium dolore esse, hic quaerat! Corporis doloremque minus nihil vel perferendis vero atque iusto nam.
                Illum recusandae qui voluptatibus quibusdam unde velit aspernatur delectus ipsam nemo nulla incidunt, cumque mollitia beatae aliquam maxime? Ullam dolor quod praesentium odit deserunt quasi nesciunt repellendus vero, officia eos?
                Fugiat dolores, eligendi, dicta beatae saepe repudiandae impedit iusto eveniet magnam reiciendis culpa voluptatum eum commodi, libero deleniti suscipit ipsa unde. Necessitatibus suscipit esse exercitationem ducimus quas aspernatur dolores molestias!
                Laborum, veritatis vitae. Quos est modi dolorem quae nesciunt labore ut enim exercitationem praesentium optio incidunt fugit corporis iste magni fuga, consequuntur obcaecati voluptas tempora. In enim laudantium minima atque.
                Rerum repellat beatae accusamus dignissimos ex soluta mollitia praesentium quo modi sequi voluptatem quae, facere aut sint atque ut ipsum!
                <br />
                Nemo porro quia, sit cupiditate debitis dolor expedita? Non, error!
                Animi adipisci a rerum eum vitae et similique eaque consequuntur illum. Eius pariatur nam facilis, eligendi laudantium exercitationem voluptatem alias tempora numquam nemo iure ab voluptatum reiciendis molestias repellendus enim?
                Aliquid impedit laudantium neque expedita at, eos nisi? Soluta consectetur, saepe quas et inventore labore maxime blanditiis id ea itaque, repudiandae dolorem corporis quis laudantium cumque nesciunt officiis, excepturi dolores?
                Exercitationem quae dolores sunt. Id atque hic, magnam autem aliquam, molestiae accusantium voluptatibus ducimus quia ab voluptate aperiam, animi explicabo maxime! Nostrum praesentium quam quasi. Nobis explicabo quibusdam itaque dignissimos.
                Sed maxime sint sapiente suscipit illum enim dolorem necessitatibus doloribus doloremque aspernatur facere, distinctio ipsum, magni, cumque id omnis fugiat nemo? Ratione voluptatem illum numquam accusantium qui placeat rem in.
                Exercitationem magnam quod non id nisi delectus repellendus culpa soluta excepturi aspernatur reiciendis accusamus architecto, impedit nesciunt eligendi ullam sit. Amet necessitatibus porro atque facilis perspiciatis quos, veritatis minus esse!
                Dicta ipsum perspiciatis incidunt eos obcaecati quos ad, aliquid deserunt excepturi officiis esse vitae neque recusandae maiores sequi. Minus autem cumque excepturi facere dicta architecto? Ullam tenetur fugiat magnam aspernatur?
                Delectus nesciunt enim officiis, labore magni fugiat laudantium sequi voluptatibus nostrum nobis cumque eveniet tempora molestiae, error eius illum minus fugit quo quas necessitatibus molestias? Repellendus iusto sapiente quaerat culpa.
                Aperiam mollitia tempora eveniet dolor consectetur aliquid error? Blanditiis ratione alias dolores animi, debitis, harum laudantium odio ut at distinctio minus a quibusdam doloribus adipisci laboriosam quo nisi totam molestias.
                Laboriosam ut nostrum quisquam aspernatur porro quos perspiciatis cumque consectetur necessitatibus deleniti quidem ad hic laudantium maiores optio assumenda itaque natus sit, aliquam cum repellat. Delectus ipsa commodi perferendis maxime.
                </p>
              </div>
            )} />
          </Switch>
        </div>
      </div>
    )
  }
}