import request from "./axios";

export function getSongCategory() {
  return request({
    url: "https://cloud-music-api-beta.vercel.app/playlist/catlist"
  })
}

export function getSongCategoryList(cat="全部", offset=0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}