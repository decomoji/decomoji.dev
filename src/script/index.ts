// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";
import { ThemeNames } from "./ThemeNames";

document.addEventListener("DOMContentLoaded", () => {
  const ThemeName = ThemeNames[Math.floor(Math.random() * ThemeNames.length)];
  const $html = document.documentElement;
  const $body = document.body;
  const $switch = document.querySelector("#Switch");

  // body 要素にテーミングクラスを追加する
  $body.classList.add(ThemeName);

  // ダークモードのトグル
  $switch.addEventListener(
    "change",
    (ev: Event) => {
      $html.classList.toggle(
        "-dark",
        Number((ev.target as HTMLInputElement).value)
      );
    },
    false
  );
});
