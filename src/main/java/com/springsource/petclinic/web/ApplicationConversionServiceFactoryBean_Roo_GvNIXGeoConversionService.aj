// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.springsource.petclinic.web;

import com.springsource.petclinic.web.ApplicationConversionServiceFactoryBean;
import com.springsource.petclinic.web.ApplicationConversionServiceFactoryBean_Roo_ConversionService;
import com.springsource.petclinic.web.ApplicationConversionServiceFactoryBean_Roo_GvNIXGeoConversionService;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.LineString;
import com.vividsolutions.jts.geom.MultiLineString;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.geom.Polygon;
import com.vividsolutions.jts.io.ParseException;
import com.vividsolutions.jts.io.WKTReader;
import com.vividsolutions.jts.io.WKTWriter;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;

privileged aspect ApplicationConversionServiceFactoryBean_Roo_GvNIXGeoConversionService {
    
    declare precedence: ApplicationConversionServiceFactoryBean_Roo_GvNIXGeoConversionService, ApplicationConversionServiceFactoryBean_Roo_ConversionService;
    
    private WKTReader ApplicationConversionServiceFactoryBean.reader = new WKTReader();
    
    private WKTWriter ApplicationConversionServiceFactoryBean.writer = new WKTWriter();
    
    public Converter<Point, String> ApplicationConversionServiceFactoryBean.getPointToStringConverter() {
         return new Converter<Point, java.lang.String>() {
            public String convert(Point point) {
                return WKTWriter.toPoint(point.getCoordinate());
            }
        };
    }
    
    public Converter<String, Point> ApplicationConversionServiceFactoryBean.getStringToPointConverter() {
         return new Converter<java.lang.String, Point>() {
            public Point convert(String str) {
                try {
                    return (Point) reader.read(str);
                }catch( ParseException e) {
                    throw new IllegalArgumentException(
                         "Invalid string for point: ".concat(str), e);
                }
            }
        };
    }
    
    public Converter<LineString, String> ApplicationConversionServiceFactoryBean.getLineStringToStringConverter() {
         return new Converter<LineString, java.lang.String>() {
            public String convert(LineString lineString) {
                return WKTWriter.toLineString(lineString.getCoordinateSequence());
            }
        };
    }
    
    public Converter<String, LineString> ApplicationConversionServiceFactoryBean.getStringToLineStringConverter() {
         return new Converter<java.lang.String, LineString>() {
            public LineString convert(String str) {
                try {
                    return (LineString) reader.read(str);
                }catch( ParseException e) {
                    throw new IllegalArgumentException(
                         "Invalid string for LineString: ".concat(str), e);
                }
            }
        };
    }
    
    public Converter<Polygon, String> ApplicationConversionServiceFactoryBean.getPolygonToStringConverter() {
         return new Converter<Polygon, java.lang.String>() {
            public String convert(Polygon polygon) {
                return writer.writeFormatted(polygon);
            }
        };
    }
    
    public Converter<String, Polygon> ApplicationConversionServiceFactoryBean.getStringToPolygonConverter() {
         return new Converter<java.lang.String, Polygon>() {
            public Polygon convert(String str) {
                try {
                    return (Polygon) reader.read(str);
                }catch( ParseException e) {
                    throw new IllegalArgumentException(
                         "Invalid string for Polygon: ".concat(str), e);
                }
            }
        };
    }
    
    public Converter<Geometry, String> ApplicationConversionServiceFactoryBean.getGeometryToStringConverter() {
         return new Converter<Geometry, java.lang.String>() {
            public String convert(Geometry geometry) {
                return writer.writeFormatted(geometry);
            }
        };
    }
    
    public Converter<String, Geometry> ApplicationConversionServiceFactoryBean.getStringToGeometryConverter() {
         return new Converter<java.lang.String, Geometry>() {
            public Geometry convert(String str) {
                try {
                    return reader.read(str);
                }catch( ParseException e) {
                    throw new IllegalArgumentException(
                         "Invalid string for Geometry: ".concat(str), e);
                }
            }
        };
    }
    
    public Converter<MultiLineString, String> ApplicationConversionServiceFactoryBean.getMultiLineStringToStringConverter() {
         return new Converter<MultiLineString, java.lang.String>() {
            public String convert(MultiLineString multiLineString) {
                return writer.writeFormatted(multiLineString);
            }
        };
    }
    
    public Converter<String, MultiLineString> ApplicationConversionServiceFactoryBean.getStringToMultiLineStringConverter() {
         return new Converter<java.lang.String, MultiLineString>() {
            public MultiLineString convert(String str) {
                try {
                    return (MultiLineString) reader.read(str);
                }catch( ParseException e) {
                    throw new IllegalArgumentException(
                         "Invalid string for MultiLineString: ".concat(str), e);
                }
            }
        };
    }
    
    public void ApplicationConversionServiceFactoryBean.installGeoLabelConverters(FormatterRegistry registry) {
        registry.addConverter(getPointToStringConverter());
        registry.addConverter(getStringToPointConverter());
        registry.addConverter(getLineStringToStringConverter());
        registry.addConverter(getStringToLineStringConverter());
        registry.addConverter(getPolygonToStringConverter());
        registry.addConverter(getStringToPolygonConverter());
        registry.addConverter(getGeometryToStringConverter());
        registry.addConverter(getStringToGeometryConverter());
        registry.addConverter(getMultiLineStringToStringConverter());
        registry.addConverter(getStringToMultiLineStringConverter());
    }
    
    public void ApplicationConversionServiceFactoryBean.afterPropertiesSet() {
        super.afterPropertiesSet();
        installLabelConverters(getObject());
        installGeoLabelConverters(getObject());
    }
    
}
