import React from "react";
import { BsPause, BsPlayFill } from "react-icons/bs";

export default function Host() {
  return (
    <main>
      <div>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Airbnb homepage"
          role="img"
          focusable="false"
        >
          <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
        </svg>
        <header>
          <div>
            <p>Open your door to hosting</p>
            <button>Try hosting</button>
          </div>
          <div>
            <video
              autoplay=""
              aria-label="Chelsea, a host in Philadelphia, smiles as she opens the door. Soraya, a host in Mumbai, smiles as she opens a front door with another person beside her. Mohamed, a host in Johannesburg, smiles as he opens a door. Maria, a host in Mexico City, nods and smiles as she carries a plant away."
              crossorigin="anonymous"
              playsinline=""
              preload="auto"
            >
              <source
                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265"
                type="video/mp4; codecs=hevc"
              />
              <source
                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                type="video/mp4"
              />
            </video>
            <aside>
              <div>
                <BsPlayFill />
                <BsPause />
              </div>

              <div>
                <p>Chelsea</p>
                <p>Host in Philadelphia</p>
              </div>
              <div>
                <p>Sonaya</p>
                <p>Host in Mumbai</p>
              </div>
              <div>
                <p>Mohamed</p>
                <p>Host in Johannesburg</p>
              </div>
              <div>
                <p>Maria</p>
                <p>Host in Mexico City</p>
              </div>
            </aside>
          </div>
        </header>
      </div>

      <section>
        <h2>Find out what you could earn as a Host</h2>
        <div>
          <aside>
            <p>Hosts in your area earn an average of*</p>
            <money>
              €3,184 <span> / month</span>
            </money>
          </aside>
          <aside>
            <p>They earn</p>
            <money>
              €212<span> / night</span>
            </money>
          </aside>
          <aside>
            <p>They're booked</p>
            <money>
              15<span>nights / month</span>
            </money>
          </aside>
        </div>
      </section>
    </main>
  );
}
