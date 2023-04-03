// @ts-nocheck
import "@cpelements/pfe-navigation";
import "@cpelements/pfe-navigation/dist/pfe-navigation--lightdom.css";

function Navigation() {
  return (
      <>
        <a href="#pfe-navigation" class="visually-hidden skip-link">Skip to navigation</a>
        <a href="#ADD-ID-TO-MAIN" class="visually-hidden skip-link">Skip to content</a>

        <pfe-navigation id="pfe-navigation" role="banner">
          <nav class="pfe-navigation" aria-label="Main Navigation">
            <div class="pfe-navigation__logo-wrapper" id="pfe-navigation__logo-wrapper">
              <a href="#" class="pfe-navigation__logo-link">
                <img
                  class="
                    pfe-navigation__logo-image
                    pfe-navigation__logo-image--screen
                    pfe-navigation__logo-image--small"
                  src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"
                  width="400" alt="Redhat" />
                <img
                  class="
                    pfe-navigation__logo-image
                    pfe-navigation__logo-image--print"
                  src="assets/orange-joe.svg"
                  width="400" alt="Orange Joe Inc." />
              </a>
            </div>
            <ul class="pfe-navigation__menu" id="pfe-navigation__menu">
              <li class="pfe-navigation__menu-item">
                <a href="#" class="pfe-navigation__menu-link">
                  Products
                </a>

                <div class="pfe-navigation__dropdown">
                  <div>
                    <h3>
                      <a href="#">Stuff and Things</a>
                    </h3>
                    <ul>
                      <li>
                        <a href="#">Orange Joe's Enterprise</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Bending Unit</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Poppler Collector</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Ship Piloting</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                      <a href="#">Ladders</a>
                    </h3>
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Dolor sit amet</a>
                      </li>
                      <li>
                        <a href="#">Wakka Wakka</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                      <a href="#">Chutes</a>
                    </h3>
                    <ul>
                      <li>
                        <a href="#">Yakkita yakkita</a>
                      </li>
                      <li>
                        <a href="#">Enterprise Yakkita yakkita</a>
                      </li>
                      <li>
                        <a href="#">Upstream Yakkita</a>
                      </li>
                      <li>
                        <a href="#">Yakkita ME</a>
                      </li>
                    </ul>
                  </div>

                  <div class="pfe-navigation__footer">
                    <pfe-cta pfe-priority="primary">
                      <a href="#">Learn more about PFElements</a>
                    </pfe-cta>

                    <pfe-cta>
                      <a href="https://github.com/">GitHub</a>
                    </pfe-cta>
                  </div>
                </div>
              </li>

              <li class="pfe-navigation__menu-item">
                <a href="#" class="pfe-navigation__menu-link">
                  Delivery Service
                </a>
                <div class="pfe-navigation__dropdown pfe-navigation__dropdown--single-column">
                  <div>
                    <h3>
                      Group 1
                    </h3>
                    <ul>
                      <li>
                        <a href="#">Orange Joe's Enterprise</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Bending Unit</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Poppler Collector</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Ship Piloting</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                      Group 2
                    </h3>
                    <ul>
                      <li>
                        <a href="#">Orange Joe's Enterprise</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Bending Unit</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Poppler Collector</a>
                      </li>
                      <li>
                        <a href="#">Orange Joe's Ship Piloting</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="pfe-navigation__menu-item">
                <a href="#" class="pfe-navigation__menu-link">
                  Training
                </a>
                <div class="pfe-navigation__dropdown pfe-navigation__dropdown--single-column">
                  <ul>
                    <li>
                      <a href="#">Orange Joe's Enterprise</a>
                    </li>
                    <li>
                      <a href="#">Orange Joe's Bending Unit</a>
                    </li>
                    <li>
                      <a href="#">Orange Joe's Poppler Collector</a>
                    </li>
                    <li class="pfe-navigation__sub-nav-link--separator">
                      <a href="#">Orange Joe's Ship Piloting</a>
                    </li>
                    <li>
                      <a href="#">Orange Joe's Ship Piloting Example</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="pfe-navigation__menu-item">
                <a href="#" class="pfe-navigation__menu-link">
                  Resources
                </a>
              </li>
              <li class="pfe-navigation__menu-item">
                <a href="#" class="pfe-navigation__menu-link">
                  Orange Joe's Promise
                </a>
              </li>
            </ul>
          </nav>

          <div slot="secondary-links" class="pfe-navigation__secondary-links" id="pfe-navigation__secondary-links">
            <a href="#" class="">
              <pfe-icon icon="web-icon-globe" pfe-size="md" aria-hidden="true"></pfe-icon>
              Deliveries
            </a>
          </div>

          <div slot="secondary-links">
            <pfe-navigation-dropdown dropdown-width="full" icon="web-globe" name="English">
              <div class="language-picker">
                <h3>Select a language</h3>
                <ul>
                  <li class="pfe-headline-5">
                    <a href="#/zh" class="language-link" lang="zh" hreflang="zh">
                      简体中文
                    </a>
                  </li>
                  <li class="pfe-headline-5">
                    <a href="#/en" class="language-link active" lang="en" hreflang="en" aria-current="page">
                      English
                    </a>
                  </li>
                  <li class="pfe-headline-5">
                    <a href="#/fr" class="language-link" lang="fr" hreflang="fr">
                      Français
                    </a>
                  </li>
                </ul>
              </div>
            </pfe-navigation-dropdown>
          </div>

          <div slot="search" class="pfe-navigation__search">
            <form>
              <label for="pfe-navigation__search-label1">Search</label>
              <input id="pfe-navigation__search-label1" type="text" placeholder="Search" />
              <button>Search</button>
            </form>
          </div>

          <pfe-navigation-account slot="account" login-link="#log-in" logout-link="#log-out"></pfe-navigation-account>

        </pfe-navigation>
    </>
  );
}

export default Navigation;
