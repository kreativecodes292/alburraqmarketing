import React from 'react'
import Hero from "../components/Hero"
import FeaturedProperties from '../components/FeaturedProperties'
import ImpactStats from '../components/ImpactStats'
import PropertyProcess from '../components/PropertyProcess'
import PropertyTestimonials from '../components/PropertyTestimonials'
import Conntact from '../components/conntact'

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedProperties />
            <ImpactStats />
            <Conntact/>
            <PropertyProcess />
            <PropertyTestimonials />
        </div>
    )
}

export default Home