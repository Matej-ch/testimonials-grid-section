import ITestimonial from "./ITestimonial.js";
import danielImg from './assets/image-daniel.jpg';
import jeanetteImg from './assets/image-jeanette.jpg';
import jonathanImg from './assets/image-jonathan.jpg';
import kiraImg from './assets/image-kira.jpg';
import patrickImg from './assets/image-patrick.jpg';

const TestimonialsData: ITestimonial[] = [
    {
        name: 'Daniel Clifford',
        position: 'Verified Graduate',
        title: 'I received a job offer mid-course, and the subjects I learned were current, if not more so,\n' +
            '        in the company I joined. I honestly feel I got every penny’s worth.',
        body: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a\n' +
            '        transition and have heard some people who had an amazing experience here. I signed up\n' +
            '        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.\n' +
            '        The next 12 weeks was the best - and most grueling - time of my life. Since completing\n' +
            '        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”',
        img: danielImg,
        hasQuote: true,
    },
    {
        name: 'Jonathan Walters',
        position: 'Verified Graduate',
        title: 'The team was very supportive and kept me motivated',
        body: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer\n' +
            '        for a big company. This was one of the best investments I’ve made in myself.”',
        img: jonathanImg,
    },
    {
        name: 'Jeanette Harmon',
        position: 'Verified Graduate',
        title: 'An overall wonderful and rewarding experience',
        body: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living\n' +
            '        while doing something I love.”',
        img: jeanetteImg,
    },
    {
        name: 'Patrick Abrams',
        position: 'Verified Graduate',
        title: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and\n' +
            '        learning from their experiences was easy.',
        body: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program\n' +
            '        gave me the confidence necessary to be able to go out in the world and present myself as a capable\n' +
            '        junior developer. The standard is above the rest. You will get the personal attention you need from\n' +
            '        an incredible community of smart and amazing people.”',
        img: patrickImg,
    },
    {
        name: 'Kira Whittle',
        position: 'Verified Graduate',
        title: 'Such a life-changing experience. Highly recommended!',
        body: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from\n' +
            '        professionals who can help me learn programming step by step. I was encouraged to enroll by a former\n' +
            '        student of theirs who can only say wonderful things about the program. The entire curriculum and staff\n' +
            '        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team\n' +
            '        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial\n' +
            '        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent\n' +
            '        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.\n' +
            '        100% recommend!”',
        img: kiraImg,
    }
];

export default TestimonialsData;