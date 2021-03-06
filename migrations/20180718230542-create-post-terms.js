module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostTerms', {
      postId: {
        type: Sequelize.INTEGER
      },
      termId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('PostTerms');
  }
};
