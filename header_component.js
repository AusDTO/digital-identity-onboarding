"use strict";
const e = React.createElement;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { liked: false };
  }

  render() {
    /* if (this.state.liked) {
      return "You liked this.";
    }
    console.log("This is accessed");
    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    ); */

    return e(
      "header",
      {
        class: "au-header au-header--dark",
        role: "banner"
      },
      React.createElement(
        "div",
        {
          class: "container-fluid"
        },
        React.createElement(
          "div",
          {
            class: "row"
          },
          React.createElement(
            "div",
            null,
            React.createElement(
              "a",
              {
                class: "au-header__brand",
                href: "../#"
              },
              React.createElement("img", {
                className: "au-header__brand-image",
                alt: "Digital Identity Service Onboarding Guide",
                src:
                  //this.props.logo_location +
                  "../assets/img/header-logo-agov.png"
              }),
              React.createElement(
                "div",
                {
                  class: "au-header__text"
                },
                React.createElement(
                  "h1",
                  {
                    class: "au-header__heading"
                  },
                  "Digital identity service onboarding guide"
                )
              )
            )
          )
        )
      )
    );
  }
}

const domContainer = document.querySelector("#header_component");
ReactDOM.render(e(HeaderComponent), domContainer);
