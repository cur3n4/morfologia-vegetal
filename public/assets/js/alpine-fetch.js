

// Alpine listeners
document.addEventListener('alpine:init', async () => {

  Alpine.magic('fetch', () => {
    return async (
      url,
      method = "GET"
    ) => await fetch(url, {method: method })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
      });
  })

});
