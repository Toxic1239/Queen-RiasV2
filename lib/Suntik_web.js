const axios = require('axios');

class Suntik {

  constructor() {

    this.api_id = global.apiid.smm; // Mengambil api_id dari global

    this.api_key = global.api.smm;   // Mengambil api_key dari global

    this.baseURL = global.APIs.smm;  // Mengambil baseURL dari global

  }

  cekProfile() {

    return new Promise(async (resolve, reject) => {

      const data = new URLSearchParams();

      data.append("api_id", this.api_id);

      data.append("api_key", this.api_key);

      await axios

        .post(this.baseURL + "/api/balance", data)

        .then((response) => {

          if (response.data == false) throw response.data.message;

          resolve(response.data);

        })

        .catch((e) => {

          reject(e);

        });

    });

  }

  cekServices() {

    return new Promise(async (resolve, reject) => {

      const data = new URLSearchParams();

      data.append("api_id", this.api_id);

      data.append("api_key", this.api_key);

      await axios

        .post(this.baseURL + "/api/services", data)

        .then((response) => {

          if (response.data == false) throw response.data.message;

          resolve(response.data);

        })

        .catch((e) => {

          reject(e);

        });

    });

  }

  cekStatus(id) {

    return new Promise(async (resolve, reject) => {

      const data = new URLSearchParams();

      data.append("api_id", this.api_id);

      data.append("api_key", this.api_key);

      data.append("id", id);

      await axios

        .post(this.baseURL + "/api/status", data)

        .then((response) => {

          if (response.data == false) throw response.data.message;

          resolve(response.data);

        })

        .catch((e) => {

          reject(e);

        });

    });

  }

  order(service, tujuan, jumlah) {

    return new Promise(async (resolve, reject) => {

      const data = new URLSearchParams();

      data.append("api_id", this.api_id);

      data.append("api_key", this.api_key);

      data.append("service", service);

      data.append("target", tujuan);

      data.append("quantity", jumlah);

      await axios

        .post(this.baseURL + "/api/order", data)

        .then((response) => {

          if (response.data == false) throw response.data.message;

          resolve(response.data);

        })

        .catch((e) => {

          reject(e);

        });

    });

  }

  refill(id) {

    return new Promise(async (resolve, reject) => {

      const data = new URLSearchParams();

      data.append("api_id", this.api_id);

      data.append("api_key", this.api_key);

      data.append("id", id);

      await axios

        .post(this.baseURL + "/api/refill", data)

        .then((response) => {

          if (response.data == false) throw response.data.message;

          resolve(response.data);

        })

        .catch((e) => {

          reject(e);

        });

    });

  }

  statusRefill(id) {

    return new Promise(async (resolve, reject) => {

      const data = new URLSearchParams();

      data.append("api_id", this.api_id);

      data.append("api_key", this.api_key);

      data.append("id", id);

      await axios

        .post(this.baseURL + "/api/refill/status", data)

        .then((response) => {

          if (response.data == false) throw response.data.message;

          resolve(response.data);

        })

        .catch((e) => {

          reject(e);

        });

    });

  }

}
module.exports = { Suntik };