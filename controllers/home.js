/**
 * Created by marcioheleno on 05/05/16.
 */
// GET Home Page
module.exports.homelist = function (req, res) {
  res.render('locaisList', {
    title:'Loc8r - find a place to work with wifi',
    pageHeader: {
      title : 'Loc8r',
      strapline : 'Find places to work with near you!'
    },
    sidebar: 'Veja as Melhoras Opções pelas opiniões de nosso usuários, comente e deixe-nos saber sua opnião!',
    locationsArray: [{
      nome: 'Farmacia Pague Menos',
      endereco: 'Rua Fernandes Tavora, S/N - Henrique Jorge',
      classificacao: '4',
      facilidades: ['Variedades de Rémedios', 'Rémedios Poupulares', 'Artigos de Higiene'],
      distancia: '450m'
    },{
      nome: 'Farmacia Aldesul',
      endereco: 'Rua Vitoria, 1200 - Henrique Jorge',
      classificacao: '3',
      facilidades: ['Entrega Rápida', 'Atendimento Ambulatorial'],
      distancia: '150m'
    },{
      nome: 'Farmacia Droga Nunes',
      endereco: 'Rua Fernandes Tavora, 3000 Henrique Jorge',
      classificacao: '4',
      facilidades: ['Rémedios Poupulares', 'Rémedios Cardiacos', 'Artigos de Higiene'],
      distancia: '850m'
    }]
  });
};

// // GET informação das locais
// module.exports.locationInfo = function (req, res) {
//   res.render('localInfo', {title:'Informação sobre a localização'})
// };

// GET "Adicionar Críticas" page
module.exports.addReview = function (req, res) {
  res.render('locationReviewForma', {title:'Adicionar um Crítica'})
};
