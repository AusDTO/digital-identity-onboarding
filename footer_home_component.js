"use strict";
const e2 = React.createElement;

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      "footer",
      {
        class: "au-footer au-footer--dark au-body au-body--dark",
        role: "contentinfo"
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
            "nav",
            {
              class: "col-md-12",
              "aria-label": "footer"
            },
            React.createElement(
              "ul",
              {
                class: "au-link-list au-link-list--inline"
              },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  {
                    href: "./contact"
                  },
                  "Contact"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  {
                    href: "https://www.dta.gov.au/accessibility"
                  },
                  "Accessibility",
                  React.createElement("img", {
                    alt: "External link to DTA Accessibility page",
                    src: "./assets/img/external-link-footer.svg"
                  })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  {
                    href: "https://www.dta.gov.au/cookies"
                  },
                  "Cookies",
                  React.createElement("img", {
                    alt: "External link to DTA Cookies page",
                    src: "./assets/img/external-link-footer.svg"
                  })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  {
                    href: "https://www.dta.gov.au/our-privacy-policy"
                  },
                  "Policy",
                  React.createElement("img", {
                    alt: "External link to DTA Policy page",
                    src: "./assets/img/external-link-footer.svg"
                  })
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  {
                    href: "https://www.dta.gov.au/disclaimer-and-copyright"
                  },
                  "Disclaimer and Copyright",
                  React.createElement("img", {
                    alt: "External link to DTA Disclaimer and Copyright page",
                    src: "./assets/img/external-link-footer.svg"
                  })
                )
              )
            )
          ),
          React.createElement(
            "section",
            {
              class: "col-sm-12"
            },
            React.createElement(
              "div",
              {
                class: "au-footer__end"
              },
              React.createElement(
                "p",
                null,
                "\xA9 Commonwealth of Australia. With the exception of the Commonwealth Coat of Arms and where otherwise noted, this work is licensed under the ",
                React.createElement(
                  "a",
                  {
                    href:
                      "https://github.com/govau/design-system-starter/blob/master/LICENSE",
                    rel: "external"
                  },
                  "MIT license",
                  React.createElement("img", {
                    alt: "External link to MIT license page",
                    src: "./assets/img/external-link-footer.svg"
                  })
                )
              )
            )
          )
        )
      )
    );
  }
}

const domContainerFooter = document.querySelector("#footer_home_component");
ReactDOM.render(e2(FooterComponent), domContainerFooter);
