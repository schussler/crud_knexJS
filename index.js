const database = require('./database');
//|> NESQUED QUERY - INSERT COM SELECT - TENTAR CONVERTER EM ASYNC E AWIAT





const functionDB = {
  insert() {
    let dados = {
      name: "days gone",
      price: 100.10
    }
    database.insert(dados).into("games").then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  },
  select() {
    database.select().table("games").then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  },
  where() {
    database.select().table("games").then((data) => {
      if (Object.keys(data).length === 0) {
        console.log("Nenhum registro encontrado");
      } else {
        console.log(data);
      }
    }).catch((err) => {
      console.log(err);
    });
  },
  whereIsert() {
    database.insert({ name: "god of wars", price: 20.20 }).into("games").then((data) => {
      database.select().table("games").then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });

  },
  update() {
    database.where({ id: 2 }).update({ name: 'douglas' }).table('games')
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })
  },
  delete() {
    database.where({ id: 6 })
      .delete()
      .table('games')
      .then((data) => {
        console.log(data);
      }).catch((err) => { err });
  },
  orderBy() {
    database.select().table('games').orderBy("price", "desc").then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  },
  associatedInsert() {
    database.insert({
      name: "rockstarGames",
      game_id: 4
    }).table('estudios').then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  },
  join() {
    database.select(["games.*", "estudios.name as estudios_name"])
      .table('games')
      .innerJoin("estudios", "estudios.game_id", "games.id")
      // .where("games.id", 5)
      .then((data) => {
        let estudiosGameArray = data;
        let game = {
          id: 0,
          name: "",
          estudios: []
        }
        game.id = data[4].id;
        game.name = data[4].name;

        data.forEach(estudios => {
          game.estudios.push({
            nome: estudios.estudios_name,
          })
        })
        console.log(game);
      }).catch(err => {
        console.log(err);
      });
  }
}

functionDB.join();

