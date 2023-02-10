'use strict';

/**
 * notif service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notif.notif');
