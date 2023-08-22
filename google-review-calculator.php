<?php
/*
Plugin Name: Google Review Calculator
Plugin URI: https://your-plugin-website.com
Description: A plugin that calculates the number of additional 5-star reviews needed to achieve a desired average rating for Google My Business.
Version: 1.0
Author: Istiak Robin
Author URI: https://istiakrobin.com
License: GPL2
*/

// Enqueue CSS and JS files
function google_review_calculator_enqueue_scripts() {
    wp_enqueue_style('google-review-calculator-style', plugins_url('style.css', __FILE__));
    wp_enqueue_script('google-review-calculator-script', plugins_url('script.js', __FILE__), array('jquery'), '', true);
}
add_action('wp_enqueue_scripts', 'google_review_calculator_enqueue_scripts');

// Shortcode function
function google_review_calculator_shortcode() {
    ob_start();
    include plugin_dir_path(__FILE__) . 'calculator.html';
    return ob_get_clean();
}
add_shortcode('google_review_calculator', 'google_review_calculator_shortcode');
