import ITestimonial from "./ITestimonial";
import './TestimonialComponent.scss';

function TestimonialComponent({item}: { item: ITestimonial }) {
    return (<article className={item.hasQuote ? 'testimonial bc-quote' : 'testimonial'}>
        <div className="flex">
            <div>
                <img src={item.img} alt={item.name}/>
            </div>
            <div>
                <h2 className="name">{item.name}</h2>
                <p className="position">{item.position}</p>
            </div>
        </div>
        <h3>{item.title}</h3>
        <p className={'body'}>{item.body}</p>
    </article>);
}

export default TestimonialComponent