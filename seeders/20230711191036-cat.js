'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //seed command
    const date = new Date()
    await queryInterface.bulkInsert('Cats', [{
      name: 'Garfield',
      age: 40,
      breed: 'Tabby',
      createdAt: date,
      updatedAt: date
    }, 
    {
      name: 'Heathcliff',
      age: 45,
      breed: 'Tabby',
      createdAt: date,
      updatedAt: date
    }])
  },

  async down (queryInterface, Sequelize) {
    //command to revert seed
    await queryInterface.bulkDelete('Cats', null, {});

  }
};
