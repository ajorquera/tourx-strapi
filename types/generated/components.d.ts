import type { Schema, Struct } from '@strapi/strapi';

export interface ScheduleCustomDates extends Struct.ComponentSchema {
  collectionName: 'components_schedule_custom_dates';
  info: {
    displayName: 'CustomDates';
  };
  attributes: {
    dates: Schema.Attribute.Component<'shared.dates', true>;
    times: Schema.Attribute.Component<'shared.times', true>;
  };
}

export interface ScheduleCustomMonths extends Struct.ComponentSchema {
  collectionName: 'components_schedule_custom_months';
  info: {
    displayName: 'CustomMonths';
  };
  attributes: {
    days: Schema.Attribute.Component<'schedule.days', false>;
    months: Schema.Attribute.Component<'schedule.months', false>;
    times: Schema.Attribute.Component<'shared.times', true>;
  };
}

export interface ScheduleDateRange extends Struct.ComponentSchema {
  collectionName: 'components_schedule_date_ranges';
  info: {
    displayName: 'DateRange';
  };
  attributes: {
    dates: Schema.Attribute.Component<'shared.dates', true>;
    days: Schema.Attribute.Component<'schedule.days', false>;
    end: Schema.Attribute.Date;
    start: Schema.Attribute.Date;
  };
}

export interface ScheduleDays extends Struct.ComponentSchema {
  collectionName: 'components_schedule_days';
  info: {
    displayName: 'Days';
  };
  attributes: {
    Friday: Schema.Attribute.Boolean;
    Monday: Schema.Attribute.Boolean;
    Saturday: Schema.Attribute.Boolean;
    Sunday: Schema.Attribute.Boolean;
    Thursday: Schema.Attribute.Boolean;
    Tuesday: Schema.Attribute.Boolean;
    Wednesday: Schema.Attribute.Boolean;
  };
}

export interface ScheduleMonths extends Struct.ComponentSchema {
  collectionName: 'components_schedule_months';
  info: {
    displayName: 'Months';
  };
  attributes: {
    April: Schema.Attribute.Boolean;
    August: Schema.Attribute.Boolean;
    December: Schema.Attribute.Boolean;
    February: Schema.Attribute.Boolean;
    January: Schema.Attribute.Boolean;
    July: Schema.Attribute.Boolean;
    June: Schema.Attribute.Boolean;
    March: Schema.Attribute.Boolean;
    May: Schema.Attribute.Boolean;
    November: Schema.Attribute.Boolean;
    October: Schema.Attribute.Boolean;
    September: Schema.Attribute.Boolean;
  };
}

export interface ScheduleSchedule extends Struct.ComponentSchema {
  collectionName: 'components_schedule_schedules';
  info: {
    displayName: 'Schedule';
  };
  attributes: {
    customDates: Schema.Attribute.Component<'schedule.custom-dates', false>;
    customMonths: Schema.Attribute.Component<'schedule.custom-months', false>;
    dateRange: Schema.Attribute.Component<'schedule.date-range', false>;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['Date Range', 'Custom Dates', 'Yearly', 'Custom Months']
    >;
    yearly: Schema.Attribute.Component<'schedule.yearly', false>;
  };
}

export interface ScheduleYearly extends Struct.ComponentSchema {
  collectionName: 'components_schedule_yearlies';
  info: {
    displayName: 'Yearly';
  };
  attributes: {
    days: Schema.Attribute.Component<'schedule.days', false>;
    times: Schema.Attribute.Component<'shared.times', true>;
  };
}

export interface SharedDates extends Struct.ComponentSchema {
  collectionName: 'components_shared_dates';
  info: {
    displayName: 'Dates';
  };
  attributes: {
    Date: Schema.Attribute.Date;
  };
}

export interface SharedDuration extends Struct.ComponentSchema {
  collectionName: 'components_shared_durations';
  info: {
    displayName: 'Duration';
  };
  attributes: {};
}

export interface SharedLanguages extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'Languages';
    icon: 'earth';
  };
  attributes: {
    Language: Schema.Attribute.Enumeration<['ES', 'IT', 'EN']>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    content: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedNav extends Struct.ComponentSchema {
  collectionName: 'components_shared_navs';
  info: {
    displayName: 'Nav';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
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

export interface SharedTimes extends Struct.ComponentSchema {
  collectionName: 'components_shared_times';
  info: {
    displayName: 'Times';
  };
  attributes: {
    time: Schema.Attribute.Time;
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
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    tours: Schema.Attribute.Relation<'oneToMany', 'api::tour.tour'>;
  };
}

export interface SliderSlide extends Struct.ComponentSchema {
  collectionName: 'components_slider_slides';
  info: {
    displayName: 'Slide';
    icon: 'apps';
  };
  attributes: {
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
      'schedule.custom-dates': ScheduleCustomDates;
      'schedule.custom-months': ScheduleCustomMonths;
      'schedule.date-range': ScheduleDateRange;
      'schedule.days': ScheduleDays;
      'schedule.months': ScheduleMonths;
      'schedule.schedule': ScheduleSchedule;
      'schedule.yearly': ScheduleYearly;
      'shared.dates': SharedDates;
      'shared.duration': SharedDuration;
      'shared.languages': SharedLanguages;
      'shared.link': SharedLink;
      'shared.nav': SharedNav;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'shared.times': SharedTimes;
      'shared.video': SharedVideo;
      'slider.card-slider': SliderCardSlider;
      'slider.slide': SliderSlide;
      'slider.slider': SliderSlider;
    }
  }
}
