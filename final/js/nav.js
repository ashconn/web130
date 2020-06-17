import * as $ from 'jquery'
import { Category } from './categories'
import { getArticles } from './articles'
import { renderLoginForm, logout } from './loginForm'
import { renderArticleForm } from './articleForm'

export function renderNav() {
    // Home Links
    $('a[href="#Home"]').on('click', function() {
        getArticles()
    })

    // Category Links
    renderCategoryDropdown()

    // Editor Links
    $('a[href="#Login"]').on('click', function() {
        renderLoginForm()
    })
    $('a[href="#Logout"]').on('click', function() {
        logout()
    })
    $('a[href="#ArticleForm"]').on('click', function() {
        renderArticleForm()
    })

    // Only applies to Bootstrap navbar, appearance only.
    $('.nav-link').on('click', function(event) {
        $('.nav-link').removeClass('active')
        const thisNavItem = $(event.target)
        thisNavItem.addClass('active')
    })

    // Render login user nav if token is set
    if (sessionStorage.getItem('token')) {
        $('.auth-user').css('display', 'block')
        $('.user').css('display', 'none')
    }
}

function renderCategoryDropdown() {
    const categoryMenuItems = $('#category-menu-items')
    for (const category of Object.keys(Category)) {
        const categoryItemHTML = `
            <a class="dropdown-item" href="#${category}">${category}</a>
        `
        categoryMenuItems.append(categoryItemHTML)
    }

    categoryMenuItems.find('a').on('click', function(event) {
        let clickedEl = $(event.target)
        let category = clickedEl.attr('href').replace('#', '')
        if (Category.hasOwnProperty(category)) {
            getArticles(category)
        }
    })
}