import images1 from '../../assets/images/slider/images.png'
import images2 from '../../assets/images/slider/images2.png'
import images3 from '../../assets/images/slider/images3.png'
import images4 from '../../assets/images/slider/images4.png'
import images5 from '../../assets/images/slider/image5.png'
import images6 from '../../assets/images/slider/images6.png'
import images7 from '../../assets/images/slider/images7.png'
import images8 from '../../assets/images/slider/images8.png'
import images9 from '../../assets/images/slider/images9.png'
import images10 from '../../assets/images/slider/images10.png'

import Slider from "react-slick";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "red",
                // position: "relative",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "green",
                // position: "relative",
                // top: "320px",
            }}
            onClick={onClick}
        />
    );
}

export const SL = () => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    return (
        <div className="container-page slider">
            <div className="title regular_h2">
                Что нельзя хранить на складе?
            </div>
            <div className="mobile">
                <div className="content">
                    <div className={'block'}>
                        <img src={images1} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Животные, растения, грунт, семена, корма
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images2} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Животные, растения, грунт, семена, корма
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images3} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Животные, растения, грунт, семена, корма
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images4} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Животные, растения, грунт, семена, корма
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images5} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Лекарства
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images6} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Продукты
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images7} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Аккумуляторы
                            и&nbsp;оборудование, которое работает
                            от аккумуляторов
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images8} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Работающие
                            генераторы и&nbsp;ЭВМ
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images9} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Оружие, боеприпасы, наркотические вещества
                        </div>
                    </div>
                    <div className={'block'}>
                        <img src={images10} alt={'repair'} className='image'/>
                        <div className={'text regular_h5'}>
                            Краденое или изъятое
                            имещуство
                        </div>
                    </div>
                </div>
            </div>
            <div className="pc">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div className={'block'}>
                                <img src={images1} alt={'repair'} className='image'/>
                                <div className={'text regular_h5'}>
                                    Животные, растения, грунт, семена, корма
                                </div>
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images2} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Животные, растения, грунт, семена, корма
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images3} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Животные, растения, грунт, семена, корма
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images4} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Животные, растения, грунт, семена, корма
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images5} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Лекарства
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images6} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Продукты
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images7} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Аккумуляторы
                                и&nbsp;оборудование, которое работает
                                от аккумуляторов
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images8} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Работающие
                                генераторы и&nbsp;ЭВМ
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images9} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Оружие, боеприпасы, наркотические вещества
                            </div>
                        </div>
                        <div className={'block'}>
                            <img src={images10} alt={'repair'} className='image'/>
                            <div className={'text regular_h5'}>
                                Краденое или изъятое
                                имещуство
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </div>
    )
}
