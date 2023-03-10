import { BaseComponent } from "./../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  //β€οΈβπ₯μ λ¬λ°μ λ°μ΄ν°λ₯Ό νμ©ν΄μ μμλ₯Ό λμ μΌλ‘ μμ±ν¨ : constructor
  //β€οΈβπ₯μ¬μ©μμκ² λ°μ κ°μ innerHTMLλ‘ λ°λ‘ μ¬μ©νλ κ²μ μννλ€ : λμ μΌλ‘ λ°λ‘ htmlμ λ§λ€ μμκΈ° λλ¬Έμ
  //ννλ¦Ώμμ μμμ μ κ·Όμμ νμν κ²λ§ μλ°μ΄νΈ
  constructor(title: string, url: string) {
    super(`<section class="image">
            <div class="image__holder"><img class="image__thumbnail"></div>
            <h2 class="image__title"></h2>
          </section>`);

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
