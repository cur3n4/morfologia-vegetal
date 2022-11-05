

// Alpine listeners
document.addEventListener('alpine:init', async () => {

  Alpine.magic('fetch', () => {
    return async (
      url,
      method = "GET"
    ) => {
      let response = await xfetch(url = url, method = method)
      return await response;
    }
  })


})

// Actual fetch function
async function xfetch(url, method = 'GET') {

  return fetch(url, {method: method })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error)
    });

}
