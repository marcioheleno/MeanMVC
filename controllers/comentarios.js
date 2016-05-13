/**
 * Created by marcioheleno on 09/05/16.
 */
// GET "Adicionar Críticas" page
module.exports.comentario = function (req, res) {
  res.render('comentario', {
    title : 'Adicionar um Comentário',
    pageHeader : {
      titulo : 'Comentários Pague Menos'
    }
  });
};