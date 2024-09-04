import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11.oo am to 10.00px"} 
            heading={"order Online"}
            
            >

cx

            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide><img src={slide1} alt="" /> <h2 className="text-4xl text-white uppercase text-center -mt-16">Salads</h2></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /> <h2 className="text-4xl text-white uppercase text-center -mt-16">Pizza</h2></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h2 className="text-4xl uppercase text-white text-center -mt-16">Soup</h2></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h2 className="text-4xl text-white uppercase text-center -mt-16">Desserts</h2></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h2 className="text-4xl uppercase text-white text-center -mt-16">Salads</h2></SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;