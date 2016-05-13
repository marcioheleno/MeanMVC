/**
 * Created by marcioheleno on 05/05/16.
 */

// GET "about" page
module.exports.other = function (req, res) {
  res.render('about', {
    title: 'Quem Somos',
    content: 'Loc8r foi criado para ajudar as pessoas a encontrar lugares estabelecimento com preços e atendimento de qualidade. \n\n' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec cursus finibus. Nunc sed tellus hendrerit, eleifend purus id, tempus est. Vestibulum vitae ligula et arcu sagittis dictum sit amet vitae orci. In consectetur ante et ullamcorper lobortis. Fusce auctor iaculis euismod. Quisque rutrum mauris id dolor efficitur, vitae imperdiet nisi ornare. Suspendisse eu purus imperdiet, lacinia libero eu, suscipit nibh. Nam pretium accumsan neque sit amet dignissim. Maecenas ipsum quam, efficitur non maximus ac, feugiat id urna. Praesent quis odio tellus. Donec sed erat in leo finibus dignissim. Nunc sagittis, tortor nec pharetra elementum, odio purus ultricies est, mattis placerat magna nibh in mi. Suspendisse eu diam a diam malesuada aliquet. Nunc hendrerit eu nunc quis tincidunt. Vestibulum viverra nisi vel ligula tincidunt varius. \n\n' +

    'Proin in nisl iaculis, consequat purus et, laoreet dolor. Integer porta nulla sit amet bibendum fringilla. Mauris euismod auctor est, ut aliquam dui semper sit amet. Sed ullamcorper lacinia neque, nec consectetur nisl finibus ut. Vivamus at laoreet enim. Suspendisse ut dictum ante. Donec in varius justo, sit amet pulvinar sem. \n\n' +
   'Maecenas fringilla odio ac est feugiat, sit amet tincidunt ipsum dictum. Nam blandit sit amet nisi sed sollicitudin. In et ligula elementum, mollis leo sit amet, placerat ex. Duis semper ante ut augue lacinia aliquam. Sed venenatis id erat vitae tincidunt. Nulla vitae risus dignissim, scelerisque orci in, molestie nulla. Nullam ut ornare elit. Cras pulvinar pellentesque odio, a condimentum est scelerisque a. Quisque id lorem eget ipsum ultrices vehicula. Vivamus iaculis semper est. Fusce dictum orci urna, porttitor tincidunt nibh ultricies in. In hac habitasse platea dictumst. Morbi accumsan leo eget turpis dignissim gravida.\n\n' +

  'Mauris et pellentesque dui, vel fringilla felis. Duis non posuere sem, in faucibus ligula. Suspendisse sit amet eleifend augue. Mauris rutrum dolor quis mollis porttitor. Nunc quis leo leo. Aliquam venenatis molestie quam. Vestibulum congue nunc vitae libero dictum, id venenatis orci consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sodales, risus id viverra volutpat, leo dolor cursus lectus, et maximus arcu massa eu tortor. Duis ut risus eros. Ut at condimentum sem, eget tristique eros. In maximus imperdiet consectetur. Ut nisl arcu, lacinia eu aliquam et, pretium quis odio. In est urna, elementum eu libero quis, ullamcorper consequat ante. Etiam et bibendum tellus. Suspendisse sed nisi tempus, cursus enim ut, auctor quam.\n\n' +

  'Integer tristique dictum est. Sed euismod dapibus quam, vel ultricies dolor posuere ac. Nunc dapibus purus eget sem convallis, in mollis tellus tempor. Etiam et vehicula purus. Nulla vel suscipit neque. Ut accumsan, sem id lobortis aliquet, lacus arcu convallis enim, quis luctus justo tortor eget ipsum. Vestibulum in odio ultrices, condimentum magna ac, tempus libero. Suspendisse eleifend, elit nec aliquet posuere, nunc mauris lacinia nulla, eget dapibus felis nisi a magna.'
  })
};