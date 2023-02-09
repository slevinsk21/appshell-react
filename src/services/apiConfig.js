const URL_BASE = import.meta.env.VITE_API_URL;

const validResponse = response => {
  if (!response.ok) {
    const { url, status, statusText } = response;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }
};

export default class BaseService {
  constructor(url) {
    this.url = URL_BASE + url;
    this.headers = { 'Content-Type': 'application/json' };
  }

  get(id, params) {
    const { url, headers } = this;
    return fetch(`${url}/${id}`, {
      headers,
      method: 'GET',
      params: params
    });
  }

  async post(data) {
    try {
      const { url, headers } = this;
      const response = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(data)
      });

      validResponse(response);

      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  update(data) {
    return fetch(`${url}/${data.id}`, {
      headers,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  remove(id) {
    return fetch(`${url}/${id}`, {
      headers,
      method: 'DELETE'
    });
  }
}
