import React, { Component } from 'react';
import RocketRed from '../../imgs/RocketRed.png';
import Watch from './Watch/Watch';
import UlMenuHeader from './HeaderComponents/UlMenuHeader/UlMenuHeader';
import MenuToggleHeader from './HeaderComponents/MenuToggleHeader/MenuToggleHeader';

import './Header.css'

export default class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollToPageBottom)
  }

  handleScrollToPageBottom = () => {
    const { scrollTop } = document.documentElement;
    const header = document.querySelector('.header');

    if (!scrollTop) {
      header.style.boxShadow = '0px 0px 0px black';
      header.style.background = '';
      header.style.transition = '0.3s ease-in-out';
      return;
    }

    header.style.boxShadow = '0px 0px 10px black';
    header.style.background = '#130725';
    header.style.transition = '0.3s ease-in-out';
  }

  handleMenuToggle = () => {
    const menuSection = document.querySelector('.menu-section');
    menuSection.classList.toggle('on');
  }

  render() {
    return (
      <header className='header'>
        <div className='title_page'>
          <h1>Towards Space</h1>
          <img src={RocketRed} />
        </div>
        <div className='menu-section'>
          <div className='menu_toggle'>
            <MenuToggleHeader
              handleMenuToggle={this.handleMenuToggle}
            />
            <nav className='menu_and_clock'>
              <UlMenuHeader />
              <Watch />
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
