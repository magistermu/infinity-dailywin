$(function() {
  $('#myModal').on('hidden.bs.modal', function (e) {
    $(this).find('iframe')[0].src += "";
  });
  $('#mc-embedded-subscribe').click(function(){
    if($('#mce-EMAIL').val() == '')
    {
      $('#alert-error').removeClass('hidden').addClass('show');
    }else{
      if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test($('#mce-EMAIL').val())){
        $('#alert-error').removeClass('show').addClass('hidden');
        $('#alert-success').removeClass('hidden').addClass('show');
        $('#action-title').removeClass('show').addClass('hidden');
        $('#mc-embedded-subscribe-form').removeClass('show').addClass('hidden');
      }else{
        $('#alert-error').removeClass('hidden').addClass('show');
      }
    }
  });
});
