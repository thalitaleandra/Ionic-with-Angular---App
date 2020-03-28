import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss']
})
export class PostDetailsPage implements OnInit {
  public lista_post: Array<Object> = [];
  constructor(public navcontrol: NavController) {
    this.lista_post = [
      {
        title: 'Ruby On Rails',
        description: 'This technology is widely used and applied ....',
        image:
          'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-ruby-on-rails_l_primaria_1_1520261687.jpg',
        date: '27/03/2020',
        avatar:
          'https://cdn2.vectorstock.com/i/thumb-large/04/61/person-avatar-vector-4340461.jpg',
        text:
          'Ruby on Rails, sometimes known as RoR or just Rails, is an open source framework for Web development in Ruby, an object-oriented programming (OOP) language similar to Perl and Python. ... According to David Geary, a Java expert, the Ruby-based framework is five to 10 times faster than comparable Java-based frameworks.'
      },
      {
        title: 'NodeJs',
        description: 'This technology is widely used and applied ....',
        image:
          'https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg',
        date: '27/03/2020',
        avatar:
          'https://cdn2.vectorstock.com/i/thumb-large/04/61/person-avatar-vector-4340461.jpg',
        text:
          "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."
      },
      {
        title: 'JavaScript',
        description: 'This technology is widely used and applied ....',
        image:
          'https://www.alexmedina.net/wp-content/uploads/2019/12/javascript.png',
        date: '27/03/2020',
        avatar:
          'https://cdn2.vectorstock.com/i/thumb-large/04/61/person-avatar-vector-4340461.jpg',
        text:
          'JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.'
      },
      {
        title: 'React',
        description: 'This technology is widely used and applied ....',
        image:
          'https://braziljs.org/wp-content/uploads/2018/02/react-debora.png',
        date: '27/03/2020',
        avatar:
          'https://cdn2.vectorstock.com/i/thumb-large/04/61/person-avatar-vector-4340461.jpg',
        text:
          'React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. ... React can also render on the server using Node, and it can power native apps using React Native.'
      },
      {
        title: 'HTML',
        description: 'This technology is widely used and applied ....',
        image:
          'https://rafaelcintralopes.com.br/wp-content/uploads/2018/01/HTML55.png',
        date: '27/03/2020',
        avatar:
          'https://cdn2.vectorstock.com/i/thumb-large/04/61/person-avatar-vector-4340461.jpg',
        text:
          'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
      }
    ];
  }
  showHome(post) {
    console.log(post);
    this.navcontrol.navigateForward('/home');
  }

  ngOnInit() {}
}
