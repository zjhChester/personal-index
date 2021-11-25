new Vue({
    el: '#app',
    data: function () {
        return {
            index:{
                about:{
                    authorPhoto:"images/author-photo.png",
                    titleFirst:"Hi there!! Welcome to my site...",
                    content: "Always believe that good things will happen, Just believe and never deny",
                    titleSecond: "something I like:",
                    skills:[
                        {
                            src: "images/icon-print.png",
                            text: "coding"
                        },
                        {
                            src: "images/icon-webdesign.png",
                            text: "new skills"
                        },
                        {
                            src: "images/icon-development.png",
                            text: "Development"
                        }
                        ]
                },
                work:{
                    description:{
                        picture: "images/image-feature.jpg",
                        title: "Featured Project",
                        href: "http://blog.zjhwork.xyz",
                        content: "Lorem ipsum dolor sit amet, consec tetur adipisicing elit..."
                    },
                    right: {
                        description: "some picture in works.",
                        pictures: [
                            {
                                title: "coding",
                                pictures: [
                                    {
                                        href: "images/image01.jpg",
                                        src: "images/logo01.jpg",
                                        alt:"1.jpg"
                                    },{
                                        href: "images/image02.jpg",
                                        src: "images/logo02.jpg",
                                        alt:"2.jpg"
                                    },{
                                        href: "images/image03.jpg",
                                        src: "images/logo03.jpg",
                                        alt:"3.jpg"
                                    },{
                                        href: "images/image04.jpg",
                                        src: "images/logo04.jpg",
                                        alt:"4.jpg"
                                    },
                                ]
                            },{
                                title: "Some thing new skills",
                                pictures: [
                                    {
                                        href: "images/image05.jpg",
                                        src: "images/web01.jpg",
                                        alt:"1.jpg"
                                    },{
                                        href: "images/image06.jpg",
                                        src: "images/web02.jpg",
                                        alt:"2.jpg"
                                    },{
                                        href: "images/image07.jpg",
                                        src: "images/web03.jpg",
                                        alt:"3.jpg"
                                    },{
                                        href: "images/image08.jpg",
                                        src: "images/web04.jpg",
                                        alt:"4.jpg"
                                    },
                                ]
                            }
                        ]
                    }
                },
                social:{
                    left:{
                        text:"Blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias",
                        link:{
                            href:"http://www.google.com/mail.",
                            text:"http://www.google.com/mail."
                        }
                    },
                    right:{
                        contacts:[
                            {
                                src:"images/icon-facebook.png",
                                href:"#",
                                text:"facebook"
                            },{
                                src:"images/icon-flickr.png",
                                href:"#",
                                text:"flickr"
                            },{
                                src:"images/icon-delicious.png",
                                href:"#",
                                text:"delicious"
                            },{
                                src:"images/icon-lastfm.png",
                                href:"#",
                                text:"lastfm"
                            },{
                                src:"images/icon-stumbleupon.png",
                                href:"#",
                                text:"stumbleupon"
                            },{
                                src:"images/icon-digg.png",
                                href:"#",
                                text:"digg"
                            }
                        ]
                    }
                },
                contact:{
                    left:{
                        text:"Drop me a note",
                        method:"post",
                        url:"#",
                        inputs:[{
                            showText:"Name:",
                            key:"name"
                        },{
                            showText:"Email:",
                            key:"email"
                        }],
                        textarea: {
                            showText:"Message:",
                            key:"message",
                            rows:2,
                            cols:2
                        },
                        btn:{
                            text: "Send"
                        }
                    },
                    right: {
                        texts: [{
                            text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                        },{
                            text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
                        }],
                        contacts:{
                            texts:[
                                {
                                    text:"Address line 1, line 2, City, XY, 12345"
                                },
                                {
                                    text:"123-456-7890"
                                },
                            ],
                            link:{
                                href:"#",
                                showText:"info@company.com"
                            }
                        }
                    }
                }
            }
        }
    },
    methods: {

    }
})