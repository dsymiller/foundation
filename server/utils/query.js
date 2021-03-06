const Sequelize = require('sequelize');
  const { DataTypes } = require('sequelize');
  
  const sequelize = new Sequelize('servicenow', 'admin', 'password', {
    host: 'localhost',
    dialect: 'postgres',
  });
  
  sequelize
    .authenticate()
    .then((res) => {
      console.log('running');
    })
    .catch((err) => console.log(err));
  
  const User = sequelize.define('User', { firstName: { type: DataTypes.STRING,  allowNull: true,  defaultValue: 'Joe',  comment: 'Users first name',  },lastName: { type: DataTypes.STRING(200),  },age: { type: DataTypes.INTEGER,  defaultValue: '21',  }, }, {});

const Group = sequelize.define('Group', { name: { type: DataTypes.STRING,  defaultValue: 'admin',  comment: 'Groups name',  }, }, {});


  
  const UserGroup = sequelize.define('UserGroup', { 
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    }, {});
    
    User.belongsToMany(Group, { through: UserGroup });
    Group.belongsToMany(User, { through: UserGroup });


  

  sequelize.sync();