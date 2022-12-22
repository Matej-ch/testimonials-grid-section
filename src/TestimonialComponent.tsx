import ITestimonial from "./ITestimonial";
import './TestimonialComponent.scss';

function TestimonialComponent({item, isWide}: { item: ITestimonial, isWide: boolean }) {

    const wideClass = isWide ? 'col-span-2' : ''
    const bcQuoteClass = item.hasQuote ? 'bc-quote' : ''
    
    return (<article className={`testimonial ${wideClass} ${bcQuoteClass}`}>
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