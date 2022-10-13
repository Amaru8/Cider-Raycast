// import { showHUD } from "@raycast/api";
import fetch from "node-fetch";

export default async function main() {
  fetch("http://localhost:9000/api/playback/playpause");
}
