// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";
import { ThemeNames } from "./ThemeNames";

document.addEventListener("DOMContentLoaded", () => {
  const ThemeName = ThemeNames[Math.floor(Math.random() * ThemeNames.length)];
  const $html = document.documentElement;
  const $body = document.body;
  const $mode = document.querySelector("#Mode");

  // body 要素にテーミングクラスを追加する
  $body.classList.add(ThemeName);

  // ダークモードのトグル
  $mode.addEventListener(
    "change",
    () => $html.classList.toggle("-dark"),
    false
  );
});
