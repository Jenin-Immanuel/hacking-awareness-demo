import styles from "../styles/Faq.module.css";

export default function FAQPage() {
  return (
    <div class={styles.FaqContainer}>
      <h2>FAQ Section</h2>
      <div>
        <ul id={styles.accordion}>
          <li>
            <label htmlFor="first">
              What is an Accordion? <span>&#x3e;</span>
            </label>
            <input type="radio" name="accordian" id="first" />
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                vel asperiores exercitationem, consequatur fuga modi pariatur.
                Nihil illo minus perspiciatis eos! Tempora alias magnam enim
                natus? Quis at corrupti doloribus porro, vel recusandae debitis
                vitae dignissimos nostrum cupiditate assumenda et tempora odit
                iste adipisci beatae maiores quod ipsa a odio.
              </p>
            </div>
          </li>
          <li>
            <label htmlFor="second">
              How to create Accordion <span>&#x3e;</span>
            </label>
            <input type="radio" name="accordian" id="second" />
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                vel asperiores exercitationem, consequatur fuga modi pariatur.
                Nihil illo minus perspiciatis eos! Tempora alias magnam enim
                natus? Quis at corrupti doloribus porro, vel recusandae debitis
                vitae dignissimos nostrum cupiditate assumenda et tempora odit
                iste adipisci beatae maiores quod ipsa a odio.
              </p>
            </div>
          </li>
          <li>
            <label htmlFor="third">
              Where to use it? <span>&#x3e;</span>
            </label>
            <input type="radio" name="accordian" id="third" />
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                vel asperiores exercitationem, consequatur fuga modi pariatur.
                Nihil illo minus perspiciatis eos! Tempora alias magnam enim
                natus? Quis at corrupti doloribus porro, vel recusandae debitis
                vitae dignissimos nostrum cupiditate assumenda et tempora odit
                iste adipisci beatae maiores quod ipsa a odio.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
