'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
/*
  /!**
   * Retrieve records.
   *
   * @return {Array}
   *!/

  async find(ctx) {
    console.error("find")
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.sub_subestructura.search(ctx.query);
    } else {
      entities = await strapi.services.sub_subestructura.find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.sub_subestructura }));
  },

  /!**
   * Retrieve a record.
   *
   * @return {Object}
   *!/

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services['sub-subestructura'].findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.sub_subestructura, includeFields:   });
  }*/
};
