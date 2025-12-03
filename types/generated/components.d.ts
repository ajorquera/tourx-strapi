import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCard extends Struct.ComponentSchema {
  collectionName: 'components_common_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonIconText extends Struct.ComponentSchema {
  collectionName: 'components_common_icon_texts';
  info: {
    displayName: 'IconText';
  };
  attributes: {};
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    content: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    image: Schema.Attribute.Media<'images'>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    ends: Schema.Attribute.String;
    loop: Schema.Attribute.Boolean;
    poster: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    starts: Schema.Attribute.String;
  };
}

export interface SliderCardSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_card_sliders';
  info: {
    displayName: 'CardSlider';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SliderSlide extends Struct.ComponentSchema {
  collectionName: 'components_slider_slides';
  info: {
    displayName: 'Slide';
    icon: 'apps';
  };
  attributes: {
    cta: Schema.Attribute.Component<'common.link', false>;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Slider';
    icon: 'grid';
  };
  attributes: {
    slide: Schema.Attribute.Component<'slider.slide', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.card': CommonCard;
      'common.icon-text': CommonIconText;
      'common.link': CommonLink;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'shared.video': SharedVideo;
      'slider.card-slider': SliderCardSlider;
      'slider.slide': SliderSlide;
      'slider.slider': SliderSlider;
    }
  }
}
