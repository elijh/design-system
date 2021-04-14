$(document).ready(function() {

  $('#glow-theme').on('click', function() {
    $('BODY').toggleClass('glow');
  });

  $('#instructions').on('click', function() {
    $('.home-template .home').addClass('hidden');
    $('.secondary-template .secondary').addClass('hidden');
    $('.article-template .article').addClass('hidden');
    $('.instructions').removeClass('hidden');
    $('.table').addClass('hidden');
    $('#home-filters').addClass('hidden');
    $('#secondary-filters').addClass('hidden');
    $('#article-filters').addClass('hidden');
  });

  $('#home').on('click', function() {
    $('.home-template').removeClass('hidden');
    $('.secondary-template').addClass('hidden');
    $('.article-template').addClass('hidden');
    $('.instructions').addClass('hidden');
    $('.table').addClass('hidden');
    $('#home-filters').removeClass('hidden');
    $('#secondary-filters').addClass('hidden');
    $('#article-filters').addClass('hidden');
  });

  $('#secondary').on('click', function() {
    $('.home-template').addClass('hidden');
    $('.secondary-template').removeClass('hidden');
    $('.article-template').addClass('hidden');
    $('.instructions').addClass('hidden');
    $('.table').addClass('hidden');
    $('#home-filters').addClass('hidden');
    $('#article-filters').addClass('hidden');
    $('#secondary-filters').removeClass('hidden');
  });

  $('#article').on('click', function() {
    $('.secondary-template').addClass('hidden');
    $('.home-template').addClass('hidden');
    $('.article-template').removeClass('hidden');
    $('.instructions').addClass('hidden');
    $('.table').addClass('hidden');
    $('#home-filters').addClass('hidden');
    $('#secondary-filters').addClass('hidden');
    $('#article-filters').removeClass('hidden');
  });

  $('#table').on('click', function() {
    $('.table').removeClass('hidden');
    $('.home-template ').addClass('hidden');
    $('.secondary-template').addClass('hidden');
    $('.article-template').addClass('hidden');
    $('.instructions').addClass('hidden');
    $('#home-filters').addClass('hidden');
    $('#secondary-filters').addClass('hidden');
    $('#article-filters').addClass('hidden');
  });

  // HOME FILTERS

  $('#flipped-item').on('click', function() {
    $('.home-template .flippedItem').toggleClass('hidden');
  });

  $('#mobile-item').on('click', function() {
    $('.home-template .mobileItem').toggleClass('hidden');
  });

  $('#featured-item').on('click', function() {
    $('.home-template .featuredItem').toggleClass('hidden');
  });

  $('#basic-content').on('click', function() {
    $('.home-template .basicContent').toggleClass('hidden');
  });

  $('#standard-item').on('click', function() {
    $('.home-template .standardItem').toggleClass('hidden');
  });

  $('#statement').on('click', function() {
    $('.home-template .statement').toggleClass('hidden');
  });

  $('#item-avatar').on('click', function() {
    $('.home-template .itemAvatar').toggleClass('hidden');
  });

  $('#tertiary-content').on('click', function() {
    $('.home-template .tertiaryContent').toggleClass('hidden');
  });

  $('#secondary-content').on('click', function() {
    $('.home-template .secondaryContent').toggleClass('hidden');
  });

  $('#primary-content').on('click', function() {
    $('.home-template .primaryContent').toggleClass('hidden');
  });

  $('#simple-item').on('click', function() {
    $('.home-template .simpleItem').toggleClass('hidden');
  });

  $('#item-content').on('click', function() {
    $('.home-template .itemContent').toggleClass('hidden');
  });

  $('#centered-item').on('click', function() {
    $('.home-template .centeredItem').toggleClass('hidden');
  });

  $('#metadata-item').on('click', function() {
    $('.home-template .metadataItem').toggleClass('hidden');
  });

  $('#hint').on('click', function() {
    $('.home-template .hint').toggleClass('hidden');
  });

  $('#button-item').on('click', function() {
    $('.home-template .buttonItem').toggleClass('hidden');
  });

  // SECONDARY FILTERS

  $('#secondary-flipped-item').on('click', function() {
    $('.secondary-template .flippedItem').toggleClass('hidden');
  });

  $('#secondary-mobile-item').on('click', function() {
    $('.secondary-template .mobileItem').toggleClass('hidden');
  });

  $('#secondary-featured-item').on('click', function() {
    $('.secondary-template .featuredItem').toggleClass('hidden');
  });

  $('#secondary-basic-content').on('click', function() {
    $('.secondary-template .basicContent').toggleClass('hidden');
  });

  $('#secondary-standard-item').on('click', function() {
    $('.secondary-template .standardItem').toggleClass('hidden');
  });

  $('#secondary-item-avatar').on('click', function() {
    $('.secondary-template .itemAvatar').toggleClass('hidden');
  });

  $('#secondary-tertiary-content').on('click', function() {
    $('.secondary-template .tertiaryContent').toggleClass('hidden');
  });

  $('#secondary-secondary-content').on('click', function() {
    $('.secondary-template .secondaryContent').toggleClass('hidden');
  });

  $('#secondary-primary-content').on('click', function() {
    $('.secondary-template .primaryContent').toggleClass('hidden');
  });

  $('#secondary-simple-item').on('click', function() {
    $('.secondary-template .simpleItem').toggleClass('hidden');
  });

  $('#secondary-item-content').on('click', function() {
    $('.secondary-template .itemContent').toggleClass('hidden');
  });

  $('#secondary-centered-item').on('click', function() {
    $('.secondary-template .centeredItem').toggleClass('hidden');
  });

  $('#secondary-button-item').on('click', function() {
    $('.secondary-template .buttonItem').toggleClass('hidden');
  });

  $('#secondary-metadata-item').on('click', function() {
    $('.secondary-template .metadataItem').toggleClass('hidden');
  });

  $('#secondary-nav').on('click', function() {
    $('.tabs').toggleClass('hidden');
    $('.secondaryIntro').toggleClass('withNav');
  });

  // ARTICLE

  $('#article-content').on('click', function() {
    $('.articleSection').toggleClass('hidden');
  });

  $('#button-group').on('click', function() {
    $('.buttonGroupContent').toggleClass('hidden');
  });

  // GLOBAL

  $('.utilityIcon').on('click', function() {
    $('aside').toggleClass('hidden');
    $('.canvas').toggleClass('wide');
    $('.canvas header').toggleClass('wide');
  });

  $('nav.staged li:last-of-type').on('click', function() {
    $('aside').toggleClass('hidden');
    $('.canvas').toggleClass('wide');
    $('.canvas header').toggleClass('wide');
  });

  $('aside .navButton').on('click', function() {
    $('aside').toggleClass('hidden');
    $('.canvas').toggleClass('wide');
    $('.canvas header').toggleClass('wide');
  });

});
