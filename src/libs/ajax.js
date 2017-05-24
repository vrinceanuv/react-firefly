// The url to your API server
const baseURL = 'http://localhost:8080/tabs'

export const loadTabs = () => {
  return fetch(baseURL)
    .then(response => response.json())
}
