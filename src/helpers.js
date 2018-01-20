export function findPhoto(id, photos) {
  return photos.find((photo) => photo.id === id)
}

export function getUniqueItems(property, items) {
  const allProperties = items.map((item) => (
    item[property]
  ))

  return allProperties.filter((item, index, self) => (
    index === self.indexOf(item)
  ))
}

export function getParams(query) {
  if (!query) {
    return { };
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ?
        decodeURIComponent(value.replace(/\+/g, ' ')) :
        '';
      return params;
    }, { });
}
