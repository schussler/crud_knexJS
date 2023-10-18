const database = require('./database');
//|> NESQUED QUERY - INSERT COM SELECT - TENTAR CONVERTER EM ASYNC E AWIAT





const functionDB = {
  insert() {
    let dados = {
      name: "forza",
      price: 10.10
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
    database.select(["games.*", "estudios.name as studios_name"]).table('games').innerJoin("estudios", "estudios.game_id", "games.id").then((data) => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }
}

functionDB.join();

