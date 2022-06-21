// export const API_URL = "https://rpgapi.drlysn.dev/json";
export const API_URL = "./Json/Photos.json";

export function PHOTOS_GET() {
  return {
    url: API_URL,
    options: {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    },
  };
}
