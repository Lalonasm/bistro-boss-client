import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>

            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"} ></SectionTitle>
            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item */}
            {/* pizz menu item */}
            <MenuCategory img={pizzImg} items={pizza} title={'pizza'}></MenuCategory>
            <MenuCategory img={dessertImg} items={desserts} title={'dessert'}></MenuCategory>
            <MenuCategory img={saladImg} items={salad} title={'salad'}></MenuCategory>
            <MenuCategory img={soupImg} items={soup} title={'soup'}></MenuCategory>

        </div>
    );
};

export default Menu;