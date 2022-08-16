import request from "./axios";

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend() {
  return request({
    url: "/personalized"
  })
}

export function getNewAlbum(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(ids) {
  return request({
    url: 'https://cloud-music-api-beta.vercel.app/song/detail', //"/top/list",
    params: {
      ids
    }
  })
}


export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}